import React, { Fragment, useState, useEffect, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button, Modal, Input, Title } from "react-bulma-companion";
import html2pdf from "html2pdf.js";

function Editor(props) {
  const [currentContent, setCurrentContent] = useState("");
  const editorRef = useRef(null);

  const updateNote = (content) => {
    const title = content.replace(/(<([^>]+)>)/gi, "").slice(0, 30);
    props.updateNote(props.note, { title: title, body: content });
  };

  const handleChange = (content, delta, source) => {
    if (source === "user") {
      setCurrentContent(content);
      updateNote(content);
    }
  };

  useEffect(() => {
    setCurrentContent(props.note.body);
  }, [props.note]);

  const [showModal, setShowModal] = useState(false);
  const [fileName, setFileName] = useState("");

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleExportPdf = () => {
    openModal();
  };

  const handleDownloadPdf = () => {
    const content = editorRef.current.editor.root.innerHTML;

    const opt = {
      margin: 1,
      filename: `${fileName}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf().set(opt).from(content).save();
    closeModal();
  };

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
      ["video"],
    ],
  };

  return (
    <Fragment>
      <ReactQuill
        ref={editorRef}
        value={currentContent}
        onChange={handleChange}
        modules={modules}
      />
      <Button className="btn m-y" onClick={handleExportPdf}>
        Exportar como PDF
      </Button>
      <Modal active={showModal}>
        <Modal.Background />
        <Modal.Card>
          <Modal.CardHead>
            <Title size="5">Escolha o nome do pdf</Title>
            <Modal.Close size="large" onClick={closeModal} />
          </Modal.CardHead>
          <Modal.CardBody>
            <Input
              type="text"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
              placeholder="Nome do arquivo"
            />
          </Modal.CardBody>
          <Modal.CardFoot>
            <Button color="success" className="btn" onClick={handleDownloadPdf}>
              Baixar
            </Button>
          </Modal.CardFoot>
        </Modal.Card>
      </Modal>
    </Fragment>
  );
}

export default Editor;
