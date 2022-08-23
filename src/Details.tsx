import * as React from "react";
import ImageWrapper from "./ImageWrapper";
import { useParams, Link } from "react-router-dom";
interface ParamTypes {
  color: string;
  type: string;
  addon: string;
}

const Details: React.FC = () => {
  // @ts-ignore
  const params = useParams<ParamTypes>();
  const pricing = {
    type: {
      Truck: 10000,
      Van: 15000
    },
    color: {
      Blue: 2000,
      Yellow: 25000,
      Red: 30000
    },
    addon: {
      Yes: 10000,
      No: 0
    }
  };

  return (
      <React.Fragment>
        {
            (params.type && params.color && params.addon) &&
            <div className="vehicle">
              <ImageWrapper
                  type={params.type}
                  color={params.color}
                  addon={params.addon}
              />

              <b>
                Total Price:{" "}
                {pricing["type"][params.type] +
                    pricing["color"][params.color] +
                    pricing["addon"][params.addon]}
              </b>
              <Link to="/">Back</Link>
            </div>
        }
      </React.Fragment>
  );
};

export default Details;
