import React from "react";
import FXModal from "./FXModal";
import FXForm from "../form/FXForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import FXInput from "../form/FXInput";
import FXTextarea from "../form/FXTextarea";
import { Button } from "@nextui-org/button";
import { useCreateClaimReq } from "@/src/hooks/claimRequest.hook";

const ClaimReqModal = ({
  questions,
  id,
}: {
  questions: string[];
  id: string;
}) => {
  const { mutate: handleClaimRequest, isPending } = useCreateClaimReq();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const claimRequestData = {
      item: id,
      description: data.description,
      answers: Object.keys(data)
        .filter((formElement) => formElement.startsWith("answer"))
        .map((answer) => data[answer]),
    };

    handleClaimRequest(claimRequestData);
  };
  return (
    <FXModal
      buttonClassName="flex-1"
      buttonVariant="light"
      buttonText="Claim Request"
      title="Claim Request"
      modalSize="2xl"
    >
      <FXForm onSubmit={onSubmit}>
        <div className="flex flex-col gap-5">
          {questions.map((question, index) => (
            <div key={index}>
              <p className="mb-1">{question}</p>

              <FXInput
                label={`Answer - ${index + 1}`}
                name={`answer-${index + 1}`}
              />
            </div>
          ))}
          <FXTextarea name="description" label="Description" />
        </div>

        <Button
          className="my-5 w-full"
          size="lg"
          variant="shadow"
          type="submit"
        >
          {isPending ? "Sending..." : "Sent"}
        </Button>
      </FXForm>
    </FXModal>
  );
};

export default ClaimReqModal;
