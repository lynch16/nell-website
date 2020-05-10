import * as React from "react";

import Loading from "./Loading";

interface Props {
  title: string;
  onSubmit(): void;
  id?: string;
  submitText?: string;
  loading?: boolean;
  error?: string;
  onClose?(): void;
}

export const closeModal = (id: string) => $(`#${id}`).modal('hide');

const Modal: React.FC<Props> = ({ 
  id,
  title,
  loading,
  error,
  onClose,
  onSubmit,
  submitText,
  children
}) => {
  const titleId = React.useRef(`${Date.now()}`);

  return (
    <div className="modal fade" id={id} tabIndex={-1} role="dialog" aria-labelledby={titleId.current} aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <form>
            <div className="modal-header">
              <h5 className="modal-title" id={titleId.current}>{title}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {loading && <Loading />}
              {children}
            </div>
            <div className="modal-footer">
              <div className="text-danger">{error}</div>
              <button type="button" onClick={onSubmit} className="btn btn-primary">{submitText || "Save changes"}</button>
              <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={onClose}>Close</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
