import * as Dialog from "@radix-ui/react-dialog";

const DialogUI = ({
  children,
  title,
}: {
  title?: string;
  children: React.ReactNode;
}) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>open</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black opacity-75 data-[state=open]:animate-overlayShow fixed inset-0 " />
        <Dialog.Content className="fixed top-[50%] left-[50%] max-h-[85vh] w-[60vw]  translate-x-[-50%] translate-y-[-50%] bg-white  shadow-2xl overflow-hidden flex">
          <Dialog.Title>{title}</Dialog.Title>
          {/* <Dialog.Description /> */}
          <Dialog.Close className="fixed top-0 right-0 ">X</Dialog.Close>
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DialogUI;
