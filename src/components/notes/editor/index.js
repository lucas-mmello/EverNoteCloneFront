import React, { Fragment, useState, useEffect } from "react";

import ReactQuill from "react-quill"; // ES6
import "react-quill/dist/quill.snow.css"; // ES6

function Editor(props) {
  const [currentContent, setCurrentContent] = useState("");

  useEffect(() => {
    setCurrentContent(props.note.body);
  }, [props.note]);

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: ["small", false, "large", "huge"] }],
      [{ color: [] }, { background: [] }],
      ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
      [{ align: [] }],
      [{ direction: "rtl" }],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      [{ script: "sub" }, { script: "super" }],
      ["link"],
      ["clean"],
      ["image"],
    ],
  };

  return (
    <Fragment>
      <ReactQuill value={currentContent} modules={modules} />
    </Fragment>
  );
}

export default Editor;
