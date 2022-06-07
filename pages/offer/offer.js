import Card from "../../components/ui/Card";
import Steps from "../../components/newoffer/Steps";
import UgyfelForm from "../../components/newoffer/UgyfelForm";
import OfferData from "../../components/newoffer/OfferData";
import GepAdatok from "../../components/newoffer/GepAdatok";
import OfferDone from "../../components/newoffer/OfferDone";

export default function OfferPage() {
  return (
    <>
      <Steps />
      <div className="mx-4 my-4">
        <Card>
          <OfferDone />
        </Card>
      </div>
      <div className="mx-4">
        <Card>
          <UgyfelForm />
        </Card>
      </div>
      <div className="mx-4 my-4">
        <Card>
          <OfferData />
        </Card>
      </div>
      <div className="mx-4 my-4">
        <Card>
          <GepAdatok />
        </Card>
      </div>
    </>
  );
}
