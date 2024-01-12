import { useEditor, EditorContent, getAttributes } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./TipTapToolbar";
import Heading from "@tiptap/extension-heading";

const TipTapComponent = ({ description, onChange }) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({}),
      Heading.configure({
        HTMLAttributes: {
          class: "text-xl font-bold",
          levels: [2],
        },
      }),
    ],
    content: description,
    editorProps: {
      attributes: {
        class:
          "rounded-md border min-h-[150px] border-input bg-dark text-white p-1",
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
      console.log(editor.getHTML());
    },
  });

  return (
    <div className="w-full space-y-3">
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default TipTapComponent;
