import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <div>
      <form>
        <div className="flex gap-4">
          <input
            className="input-url"
            type="text"
            placeholder="introduce la url del video"
          />
          <button className="btn">Descargar</button>
        </div>
      </form>
    </div>
  );
}
