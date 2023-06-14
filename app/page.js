"use client"
import { useState } from "react";
import Table from "./components/Table/Table";
import Modal from "./components/Table/Modal";
import Form from "./components/Table/Form";

export default function Home() {
  const [show, setShow] = useState(true)
  const [input, setInput] = useState({
    name : '',
    status : ''
  })

  // handle submit
  const handleSubmit = (e) => {
e.preventDefault()

    alert(JSON.stringify(input))
  }

  const handleInput = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name] : e.target.value
    }))
  }
  return (
    <main>
      <div className="container py-5 w-50">
          <div className="row">
            <div className="col">
             <div className="card">
              <div className="card-header d-flex justify-content-between">
                <h3>TODOS</h3>
                <button className="btn btn-primary btn-sm" onClick={() => setShow(!show)}>Add TODO</button>
              </div>
              <div className="card-body">
                <Table ></Table>
              </div>
             </div>
            </div>
          </div>
      </div>
      {
        show && <Modal show={show} setShow={setShow}>
            <Form input={input} handleInput={handleInput} setInput={setInput} handleSubmit={handleSubmit}></Form>
        </Modal>
      }
    </main>
  )
}
