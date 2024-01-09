import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { credentialBlog } from "@/configs/config";
import FormCreateJournal from "@/components/dhensjournal/blog/FormCreateJournal";

const CreateBlog = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [samePassword, setSamePassword] = useState(null);

  useEffect(() => {
    setOpenDialog(true);
  }, []);

  const checkPassword = (e) => {
    e.preventDefault();
    const password = e.target[0].value;

    if (password == credentialBlog) {
      setSamePassword(true);
      setOpenDialog(false);
    } else {
      setSamePassword(false);
      setOpenDialog(true);
    }
  };

  return (
    <>
      {/* <Dialog open={openDialog}>
        <DialogContent className="sm:max-w-md dark">
          <DialogHeader>
            <DialogTitle className="text-white">Input password</DialogTitle>
            <DialogDescription>
              Only you can create a new blog
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={checkPassword}>
            <Label htmlFor="password" className="sr-only">
              Password
            </Label>
            <Input
              id="password"
              placeholder="*****"
              type="password"
              className="text-white"
            />
            {!samePassword && samePassword != null && (
              <p className="text-red-600 text-xs mt-3">Wrong credentials</p>
            )}
            <div className="w-full flex justify-end mt-3">
              <Button type="submit" variant="secondary">
                Submit
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog> */}
      <div className="w-full grid place-items-center mx-auto max-w-lg">
        <FormCreateJournal />
      </div>
    </>
  );
};

export default CreateBlog;
