import Button from "./Button.svelte";

describe("Button Component", () => {
    let instance = null;

    beforeEach(() => {
        //create instance of the component and mount it
    })

    afterEach(() => {
        //destory/unmount instance
    })

    it("should render the component", () => {
        // Create a new container for the test
        const host = document.createElement('div');

        // Append the new container in the HTML body
        document.body.appendChild(host);

        // Create an instance of the vertical tab
        const instance = new Button({ target: host, props: {label: 'Test Button!'} });

        // Check if the instance has value
        expect(instance).toBeTruthy();

        // Test if we can find the "First Tab Heading"
        expect(host.innerHTML).toContain("Test Button!");

    });

})