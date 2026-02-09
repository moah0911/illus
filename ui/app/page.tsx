"use client";

import { useState } from "react";

export default function Home() {
  const [fileName, setFileName] = useState<string | null>(null);
  const [status, setStatus] = useState("Waiting for a PDF upload.");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setStatus("PDF ready. Configure your pipeline and generate a graph.");
    } else {
      setFileName(null);
      setStatus("Waiting for a PDF upload.");
    }
  };

  const handleGenerate = () => {
    setStatus("Graph generation kicked off locally. Check the notebook for progress.");
  };

  return (
    <main>
      <header>
        <h1>Knowledge Graph Studio</h1>
        <p>
          Turn unstructured PDFs into a searchable knowledge graph powered by a local
          LLM pipeline. Upload a document, review the steps, and run the notebook to
          build your graph.
        </p>
      </header>

      <section className="hero">
        <div className="card">
          <h2>Pipeline overview</h2>
          <p>
            The project splits your document into chunks, extracts concepts and
            relationships with a local Ollama model, and merges them into a graph
            schema ready for visualization.
          </p>
          <ul className="steps">
            <li>1. Upload an unstructured PDF (clinical notes, reports, papers).</li>
            <li>2. Extract concepts + relationships with the Mistral OpenOrca prompt.</li>
            <li>3. Aggregate nodes/edges and export a network graph dataset.</li>
            <li>4. Visualize with PyVis and share as a static HTML page.</li>
          </ul>
        </div>

        <div className="card">
          <h2>Upload a PDF</h2>
          <p>
            This UI pairs with the existing notebooks. After selecting a PDF, open
            <strong> extract_graph.ipynb</strong> to run the pipeline locally.
          </p>
          <div className="upload">
            <input type="file" accept="application/pdf" onChange={handleFileChange} />
            <button type="button" onClick={handleGenerate}>
              Generate graph
            </button>
            <div className="status">
              {fileName ? `Selected: ${fileName}` : "No file selected yet."}
            </div>
            <div className="status">{status}</div>
          </div>
        </div>
      </section>

      <section className="grid">
        <div className="mini">
          <h3>Local-first</h3>
          <p>Run everything on your own machine with Ollama and the provided models.</p>
        </div>
        <div className="mini">
          <h3>Schema ready</h3>
          <p>Outputs clean node + edge tables for NetworkX or a graph database.</p>
        </div>
        <div className="mini">
          <h3>Shareable</h3>
          <p>Export interactive HTML graphs and publish them as static pages.</p>
        </div>
      </section>

      <footer>
        Tip: keep the Ollama server running before launching the extraction notebook.
      </footer>
    </main>
  );
}
