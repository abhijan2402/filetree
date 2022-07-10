// Email- abhishek.jangid643@gmail.com
// Password - abhi@123
import "./App.css";
import { Storage } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { useEffect, useState } from "react";
import FileViewer from "react-file-viewer";
function App() {
  const [fil, setFil] = useState("")
  async function onChange(e) {
    const file = e.target.files[0];
    const result = await Storage.put(file.name, file);
    console.log("the result is ", result);

  }

  const file = "https://reactimage223501-dev.s3.us-east-1.amazonaws.com/public/Presentation%206.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAWL27HAFTVJXCZ4ER%2F20220710%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220710T143400Z&X-Amz-Expires=900&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEb%2FWl8ZLkbz1eWdEyFkn5BFHcF8OrZ9b8OWewoUTPYxAiEAgWGRuqVLXmUH27zvPFyKFatWVecm9LoS%2FB8oKCURcnIqxAQIMBAAGgw0Mzc3NDk0ODE4MzEiDHaMWKhbWmH2GzoZgSqhBNXsonZ12ek8kKE%2FK4yHroStH6ck4PEicxT5l8tgRWv0SBswc2fOmSHzeM0g2J5D1KAQp6Suv1%2FiGiplFCLEwtrBnZ6epm4kVp%2BGGBgpdmxgILFHr84hEWwcfdPyf3wvhRmgKvgsN5AbI7MpoqwiAXmzad4sMWvFSg3fh3W9Wlfk%2B6Amg96BZWoDAmx2y8LMxPC0aEp00RqjJVfUAkEOzGd3KRipvZL6xETChPfFZThLd5qRFgMsuiAv%2BL2jflNKyoLM3DXyz8WWX%2FdoSXImEI3RN6e6NQfN%2Bgg49OXaw0hwfaO%2BXVBJlMcvXN2MRd6F4M28VGKI9G9%2FgYzMap%2Fc%2B0n8X5rCsxaG5rKshCaYgN9dLfcobGZAewDLA6nkGwbDTwo2PJqPIMKJGqBHzUOSMD6FrVAiDowPePyatDSnE8MPKoE79RtVtNS0P86cQAotZPsk7gqRlmj%2Bcxhg3P33o%2BDa7iec8JUZYFGODe%2FJnQ5uZrnxS64vdwec6lpErR0stc1xa9EFeyJF%2BZ1yZndr7Csvd2PrxUWZkTlEm8SSxIGuE1vAzR8mm92H1xkU8Lu7bahwakgG1ntdD1Ood6Yv7uroJoMtTAjCkrYeftFu4CkkGsTqvpcHNPqv7J9AarNOm%2BLNnS8okoo8x7YYqaN%2BVNl5w7Psg8DQ1f2hFoUZiRljNNVHdJqUE%2B7hQnI6qB2Xj2vG5K%2Bqulp7zLdy%2FOEMQuNyMNjGq5YGOoUCf1Kcd7V1PVbgFbPmjhErOMXE1fj5gwO6TqYjYikmX3nxpD7MOkPKFejFUViAR7JED9JLtmj6CIurSRUnT33uIcZJNuRmn5s9q%2B9I2nfIUjtdvywOF%2Fr%2F42XRMZbcjkUv2VX4WI%2BkuigVGF6XzXynG%2BAfcosOOMt%2FVLAa0N5VHI3d602iPnuB6RbIYIek08bYZytiBcdQxYSt2jmoJIUV0%2Ffow3356fNk4MKe5mE38QDca6UegxAe5QZETE%2F7io9Rqad7vftdBaCfKrB%2BWBrMjQj7IePUCqwoD7aVevmIuPBG%2B4jRd9p0PfVeNm54OiEHf87pYcw%2B%2FzBMBuvR%2FpYsHKJpbySZ&X-Amz-Signature=fe5783b70006b3e326ef13a20fe11873bf195dbdac9e1d34180494e89acb88df&X-Amz-SignedHeaders=host&x-amz-user-agent=aws-sdk-js%2F3.6.1%20os%2FAndroid%2F6.0%20lang%2Fjs%20md%2Fbrowser%2FChrome_103.0.0.0%20api%2Fs3%2F3.6.1%20aws-amplify%2F4.5.5_js&x-id=GetObject";
  const type = "pdf";

  const onError = e => {
    console.log(e, "error in file-viewer");
  };

  const props = {
    allowFullScreen: true,
    src: "http://projects.itsasbreuk.nl/react-components/itsa-docviewer/example.pdf"
  };

  useEffect(() => {
    getdata()
  }, []);
  async function getdata() {
    try {
      const fileAccessURL = await Storage.get(`Presentation 6.pdf`,)
      console.log(fileAccessURL)
      const date = fileAccessURL;
      console.log(date)
      setFil(date)

      console.log(fil)
    } catch (error) {
      console.log("error is ", error)
    }
  }
  return (
    <>
      <h1>storage example</h1>
      <input type="file" onChange={onChange} />
      <div className="App">
        <h1>React File Viewer Demo</h1>
        <h2>Displaying file with extension {type}</h2>
        <FileViewer fileType={type} filePath={file} onError={onError} />
      </div>
    </>
  );
}

export default withAuthenticator(App);
