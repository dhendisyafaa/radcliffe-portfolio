import Tiptap from "@/components/tiptap/TipTapComponent";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Textarea } from "@/components/ui/textarea";
import { useCreateJournal } from "@/pages/api/resolvers/journalResolver";
import { useRouter } from "next/router";

const FormCreateJournal = () => {
  const { mutateAsync: createJournal } = useCreateJournal();
  const { push } = useRouter();

  const formSchema = z.object({
    title: z.string().min(2).max(50),
    short_description: z.string().min(2),
    content: z.string().min(2),
    tag: z.string().min(2),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      title: "",
      short_description: "",
      content: "",
      tag: "",
    },
  });

  async function onSubmit(values) {
    try {
      const arrayTag = values.tag.split(", ");
      const newJournal = {
        title: values.title,
        short_description: values.short_description,
        content: values.content,
        tag: arrayTag,
      };

      await createJournal(newJournal);
      // push("/dhensjournal");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-full dark py-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title journal</FormLabel>
                <FormControl>
                  <Input
                    placeholder="shadcn"
                    className="text-white"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  FIX This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="short_description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Short description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="shadcn"
                    className="text-white"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Content journal</FormLabel>
                <FormControl>
                  <Tiptap description={field.value} onChange={field.onChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tag"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tag</FormLabel>
                <FormControl>
                  <Input className="text-white" {...field} />
                </FormControl>
                <FormDescription>
                  FIX This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="w-full text-end">
            <Button type="submit">Publish</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default FormCreateJournal;
