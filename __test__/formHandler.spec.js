
//Import the js file to test
import { userInfo } from "os";
import { handleSubmit } from "../src/client/js/formHandler"
import { postData } from "../src/client/js/formHandler"


test("handleSubmit function exists", () => {
    expect(handleSubmit).toBeDefined();
});

test("Testing postData", async () => {
    expect(postData).toBeDefined;
});

