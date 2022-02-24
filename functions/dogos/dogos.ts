import { Handler } from "@netlify/functions";
import { createDogos } from "./createDogos";
import { readDogos } from "./readDogos";

const handler: Handler = (event, context, callback) => {
  switch (event.httpMethod) {
    case "GET":
      return readDogos(event, context, callback);
      break;
    case "POST":
      return createDogos(event, context, callback);
      break;
  }

  return { statusCode: 501 };
};

export { handler };
