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
import { Textarea } from "../ui/textarea";
import TitleSection from "./TitleSection";

const WHATSAPP_NUMBER = "6285861533508";

const ContactSection = () => {
  const formSchema = z.object({
    company_name: z
      .string()
      .min(2, { message: "This field has to be filled." })
      .max(50),
    company_email: z
      .string()
      .min(2, { message: "This field has to be filled." })
      .email("This is not a valid email."),
    message: z.string().min(2, { message: "This field has to be filled." }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      company_name: "",
      company_email: "",
      message: "",
    },
  });

  function onSubmit(values) {
    const message = [
      "Halo, saya ingin menghubungi Anda.",
      "",
      `Nama: ${values.company_name}`,
      `Email: ${values.company_email}`,
      `Pesan: ${values.message}`,
    ].join("\n");
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <section className="min-h-screen flex items-center">
      <div className="w-full">
        <TitleSection
          title={"Contact"}
          description={"Chat with me on WhatsApp!"}
        />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="company_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Daniel Jacob or Radcliffe Company"
                      className="bg-transparent text-white"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Tell me your name or your company name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company_email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="inforadcliffe@gmail.com"
                      className="bg-transparent text-white"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Tell me your email or your company email.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      className="bg-transparent text-white"
                      placeholder="Type your message here."
                      id="message"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="flex items-center gap-3 w-full md:max-w-fit"
            >
              Kirim ke WhatsApp
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default ContactSection;
