import { createServer } from "miragejs";

const bmiData = [];

createServer({
  routes() {
    this.namespace = "api";

    this.post("/bmi", (schema, request) => {
      let dataAttribute = JSON.parse(request.requestBody);
      dataAttribute.id = Math.floor(Math.random() * 100);
      bmiData.push(dataAttribute);
      return { bmi: dataAttribute };
    });

    this.get("/bmi", () => {
      return {
        bmiData
      };
    });
  }
});
