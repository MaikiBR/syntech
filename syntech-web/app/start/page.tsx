"use client";

import Header from "../components/header";
import Footer from "../components/footer";
import Gramatica from "../components/gramatica";
import { FormEvent, useState } from "react";

export default function Start() {
  const [inputText, setInputText] = useState<string>(
    "#1{ Estiliza tu texto rápidamente }"
  );
  const [outputText, setOutputText] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch('../../api-python/main', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: inputText }),
    });

    const data = await res.json();
    setOutputText(data.result);
  };

  return (
    <main>
      <Header />
      <div className="flex flex-row w-full space-x-12 px-16 py-8 bg-background-light">
        <div className="w-full">
          <form onSubmit={handleSubmit}>
            <div className="w-full border border-gray-200 rounded-lg bg-gray-50">
              <div className="px-4 py-2 bg-white rounded-t-lg">
                <label htmlFor="comment" className="sr-only"></label>
                <textarea
                  id="comment"
                  rows={10}
                  className="w-full h-[400px] px-0 text-sm text-gray-900 bg-white border-0"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  required
                />
              </div>
              <div className="flex items-center justify-between px-3 py-2 border-t">
                <button
                  type="submit"
                  className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-logo-blue rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-secondary-blue hover:text-logo-blue"
                >
                  Ejecutar
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="w-full">
          <div className="w-full border border-gray-200 rounded-lg bg-gray-50">
            <div className="px-4 py-2 bg-white rounded-t-lg">
              <p
                id="comment"
                className="w-full h-[459px] px-0 text-sm text-gray-900 bg-white border-0"
                dangerouslySetInnerHTML={{ __html: outputText }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center py-10 bg-background-light text-logo-blue">
        <p className="text-5xl font-bold pb-9">Gramática</p>
        <Gramatica />
      </div>
      <Footer />
    </main>
  );
}
