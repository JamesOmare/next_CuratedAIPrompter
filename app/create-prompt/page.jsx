// "use client";

// import { useState, useEffect } from 'react'
// import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
// import { useRouter } from 'next/navigation'

// import Form from '@components/Form'

// const CreatePrompt = () => {
//     const router = useRouter();
//     const { data: session } = useSession();

//     const [submitting, setSubmitting] = useState(false);
//     const [post, setPost] = useState(
//         {
//             prompt: '',
//             tag: '',
//         }
//     );

//     useEffect(() => {
//         const setUpProviders = async () => {
//             const response = await getProviders();
//             setProviders(response)
//         }

//         setUpProviders();
//     }, [])

//     const createPrompt = async () => {
//         console.log(post);
//         console.log(session)
        
//         // e.preventDefault();
//         setSubmitting(true);

//         console.log('user id: ', session?.user.id);

//         try {
//             const response = await fetch('/api/prompt/new', {
//                 method: 'POST',
//                 body: JSON.stringify({
//                     prompt: post.prompt,
//                     userId: session?.user.id,
//                     tag: post.tag,
//                 }),
//             });

//             if(response.ok){
//                 router.push('/');
//             }


//         } catch (error) {
//             console.error(error);
            
//         } finally {
//             setSubmitting(false);
//         }
 
//     }

//     return (
//         <Form
//         type='Create'
//         post={post}
//         setPost={setPost}
//         submitting={submitting}
//         handleSubmit={createPrompt}

//         />

//     )

// }

// export default CreatePrompt;

"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";

const CreatePrompt = () => {
  const router = useRouter();
  const { data: session, status } = useSession()

  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ prompt: "", tag: "" });

  if (status !== "authenticated") {
    return <p>Sign In To Continue</p>
  }

  const createPrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log("userId:", session?.user.id);
      const response = await fetch("/api/prompt/new", {
        method: "POST",
        body: JSON.stringify({
          prompt: post.prompt,
          userId: session?.user.id,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type='Create'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  );
};

export default CreatePrompt;