import React from 'react';

const Error = () => {
return (
  <div>
  <div className="modal fade" 
    id="errorModal" 
    tabIndex="-1" 
    role="dialog" 
    aria-labelledby="errorModalLabel"
    aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="errorModalLabel">Error</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>This is an error</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
  </div>
</div>
);
};

export default Error;