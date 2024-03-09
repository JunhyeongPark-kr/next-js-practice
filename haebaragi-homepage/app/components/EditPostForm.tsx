import React, { useState } from "react";

interface EditPostFormProps {
  postId: number;
  initialTitle: string;
  initialContent: string;
}

const EditPostForm: React.FC<EditPostFormProps> = ({
  postId,
  initialTitle,
  initialContent,
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch(`/api/posts/${postId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    });

    if (response.ok) {
      // 성공적으로 게시글을 수정한 후의 로직
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* 입력 필드와 제출 버튼은 CreatePostForm과 유사하므로 생략 */}
    </form>
  );
};

export default EditPostForm;
