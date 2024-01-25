"use client";

import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import { useRouter } from 'next/router'

import Form from '@components/Form'

const CreatePrompt = () => {

    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState(
        {
            prompt: '',
            tag: '',
        }
    );

    const createPrompt = async () => {
        setSubmitting(true);
        const response = await fetch('/api/create-prompt', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(post),
        });
        setSubmitting(false);
        const { data } = await response.json();
        router.push(`/prompt/${data.id}`);
    }

    return (
        <Form
        type='create'
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={createPrompt}

        />

    )

}

export default CreatePrompt;