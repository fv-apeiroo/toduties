import React, { useEffect, useState } from 'react'
import { Button, Space, Form, Input, message, Modal, Card } from 'antd'
import { Duty } from '../../types/Duty'
import { getDuties, deleteDuty, createDuty } from '../../services/api'
import { DutyForm } from '../DutyForm/DutyForm'

interface DutyListProps {
    onSave: () => void
    onDelete: () => void
}

export const DutyList: React.FC<DutyListProps> = ({ onSave, onDelete }) => {
    const [duties, setDuties] = useState<Duty[]>([])
    const [loading, setLoading] = useState(false)
    const [editingDuty, setEditingDuty] = useState<Duty | null>(null)
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)
    const [deleteId, setDeleteId] = useState<string | null>(null)

    useEffect(() => {
        fetchDuties()
    }, [onSave, onDelete])

    const fetchDuties = async () => {
        setLoading(true)
        try {
            const duties = await getDuties()
            setDuties(duties)
        } catch (error) {
            message.error('An error occurred while fetching duties')
        } finally {
            setLoading(false)
        }
    }

    const handleEdit = (duty: Duty) => {
        setEditingDuty(duty)
        setIsModalVisible(true)
    }

    const handleDelete = async () => {
        if (deleteId) {
            try {
                await deleteDuty(deleteId)
                message.success('Duty successfully deleted')
                onDelete()
            } catch (error) {
                message.error('An error occurred while deleting the duty')
            } finally {
                setIsDeleteModalVisible(false)
            }
        }
    }

    const handleShowDeleteModal = (id: string) => {
        setDeleteId(id)
        setIsDeleteModalVisible(true)
    }

    return (
        <div>
            <DutyForm
                visible={isModalVisible}
                onSave={onSave}
                duty={editingDuty || undefined}
                onClose={() => setIsModalVisible(false)}
            />
            <Modal
                title="Confirm Deletion"
                open={isDeleteModalVisible}
                onOk={handleDelete}
                onCancel={() => setIsDeleteModalVisible(false)}
            >
                <p>Are you sure you want to delete this duty?</p>
            </Modal>
            <Form
                className="dl-create-duty"
                style={{ marginBottom: '10px' }}
                layout="inline"
                onFinish={async (values) => {
                    try {
                        await createDuty(values)
                        message.success('Duty successfully created')
                        onSave()
                    } catch (error) {
                        message.error('An error occurred while creating the duty')
                    }
                }}
            >
                <Form.Item
                    name="name"
                    rules={[{ required: true, message: 'Please input the duty name!' }]}
                >
                    <Input placeholder="Duty name" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Create
                    </Button>
                </Form.Item>
            </Form>
            <div className="dl-container">
                {duties.map((duty) => (
                    <Card className='dl-card'
                        loading={loading}
                        key={duty.id}
                        title={`${duty.id} - ${duty.name}`}
                        extra={
                            <Space>
                                <Button type="primary" onClick={() => handleEdit(duty)}>
                                    Edit
                                </Button>
                                <Button type="primary" danger onClick={() => handleShowDeleteModal(duty.id)}>
                                    Delete
                                </Button>
                            </Space>
                        }
                        style={{ marginBottom: '16px', border: '1px dashed rgb(0, 0, 192)' }}
                    >
                        <p>{duty.name}</p>
                    </Card>
                ))}
            </div>
        </div>
    )
}