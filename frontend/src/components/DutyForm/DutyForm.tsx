import React, { useState, useEffect } from 'react'
import { Input, Button, Form, message, Modal } from 'antd'
import { Duty } from '../../types/Duty'
import { createDuty, updateDuty } from '../../services/api'

interface DutyFormProps {
    duty?: Duty
    onSave: () => void
    visible: boolean
    onClose: () => void
}

export const DutyForm: React.FC<DutyFormProps> = ({ duty, onSave, visible, onClose }) => {
    const [form] = Form.useForm()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (visible) {
            if (duty) {
                form.setFieldsValue({
                    name: duty.name,
                })
            } else {
                form.resetFields()
            }
        }
    }, [duty, form, visible])

    const handleSubmit = async (values: { name: string }) => {
        setLoading(true)

        try {
            if (duty) {
                await updateDuty({ ...duty, name: values.name })
                message.success('Duty successfully updated')
            } else {
                await createDuty({ name: values.name })
                message.success('Duty successfully created')
            }
            onSave()
            onClose()
        } catch (error) {
            message.error('An error occurred while saving the duty')
        } finally {
            setLoading(false)
        }
    }

    return (
        <Modal
            title={duty ? 'Update Duty' : 'Create Duty'}
            open={visible}
            onCancel={onClose}
            footer={null}
        >
            <Form form={form} onFinish={handleSubmit}>
                <Form.Item
                    name="name"
                    rules={[{ required: true, message: 'Please input the duty name!' }]}
                >
                    <Input
                        type="text"
                        placeholder="Duty name"
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" loading={loading}>
                        {duty ? 'Update' : 'Create'}
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    )
}