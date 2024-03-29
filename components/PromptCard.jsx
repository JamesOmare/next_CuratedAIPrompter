"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
// import { useRouter } from "next/router";
import { usePathname } from 'next/navigation'

const PromptCard = ({post, handleTagClick, handleEdit, handleDelete}) => {

  const { data: session } = useSession();
  const pathName = usePathname();
  // const router = useRouter();
  const [copied, setCopied] = useState("");

  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <Image
            src={post?.creator?.image}
            alt = "iser_image"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />

          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-500">
              {post?.creator?.username}
            </h3>

            <p className="font-inter text-sm text-gray-500">
              {post?.creator?.email}
            </p>
          </div>
        </div>

        <div className="copy_btn" onClick={() => {}}>
          <Image
            alt=""
            src = {copied === post?.prompt
              ? "/assets/images/tick.svg"
              : "/assets/images/copy.svg"
            }
            width={12}
            height={12}
          />
        </div>
      </div>

      <p className="my-4 font-satoshi text-sm text-gray-700">
        {post?.prompt}
      </p>

      <p className="font-inter text-sm blue_gradient cursor-pointer">
        {post?.tag}
      </p>
    </div>
  )
}

export default PromptCard