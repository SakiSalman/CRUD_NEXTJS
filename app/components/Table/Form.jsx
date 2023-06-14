import React from "react";

function Form({input, setInput, handleInput, handleSubmit}) {



  return (
    <div>
      {" "}
      <form class="row g-3 py-5">
        <div className="row">
          <div class="col">
            <input
            name="name"
              type="text"
              class="form-control"
              id="validationCustom01"
              required
              onChange={handleInput}
              value={input.name}
            />
          </div>

          <div class="col">
            <div class="input-group">
              <select name="status" id="" className="form-control"
              onChange={handleInput}
              value = {input.status}
              >
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>

          <div class="col-12 mt-2">
            <button class="btn btn-primary" type="submit"
            onClick={handleSubmit}>
              Add Todo
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
