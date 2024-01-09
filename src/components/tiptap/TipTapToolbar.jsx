import {
  FaBold,
  FaHeading,
  FaItalic,
  FaListOl,
  FaStrikethrough,
} from "react-icons/fa6";
import { PiListBullets } from "react-icons/pi";
import { Toggle } from "../ui/toggle";

const TipTapToolbar = ({ editor }) => {
  if (!editor) return null;
  return (
    <div className="text-white rounded-md border p-1">
      <Toggle
        size="sm"
        pressed={editor.isActive("heading")}
        onPressedChange={() =>
          editor.chain().focus().toggleHeading({ level: 2 }).run()
        }
      >
        <FaHeading />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("bold")}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}
      >
        <FaBold />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("italic")}
        onPressedChange={() => editor.chain().focus().toggleItalic().run()}
      >
        <FaItalic />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("strike")}
        onPressedChange={() => editor.chain().focus().toggleStrike().run()}
      >
        <FaStrikethrough />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("bulletList")}
        onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
      >
        <PiListBullets />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("orderedList")}
        onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
      >
        <FaListOl />
      </Toggle>
    </div>
  );
};

export default TipTapToolbar;
