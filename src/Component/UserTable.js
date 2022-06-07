import React from 'react'
import { Table } from 'react-bootstrap'

export default function UserTable({ posts, loading }) {
    if (loading) {
        return <h2>Loading...</h2>;
    }
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>User Name</th>
                </tr>
            </thead>
            <tbody>
                {
                    posts.map(post => (
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.name}</td>
                            <td>{post.email}</td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    )
}
