"use client";

import { useEffect, useState } from "react";
import styles from "./component.module.css";
import { useDispatch, useSelector } from "react-redux";
import { adminDataSlice, selectAdminData } from "@/lib/redux";

interface Form {
  position: string;
  company: string;
}

export const InputPanel = () => {
  const dispatch = useDispatch();
  const form = useSelector(selectAdminData).formData;

  const inputChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const inputName = e.currentTarget.name as keyof Form;
    const newValue = e.currentTarget.value;
    const newForm = { ...form, [inputName]: newValue };
    dispatch(adminDataSlice.actions.setForm(newForm));
  };

  return (
    <div className={styles.div}>
      <div className={styles.inputsContainer}>
        <span className={styles.span}>Position:</span>
        <input
          name="position"
          type="text"
          value={form.position}
          onChange={inputChangeHandler}
          className={styles.input}
        ></input>

        <span className={styles.span}>Company:</span>
        <input
          name="company"
          type="text"
          value={form.company}
          onChange={inputChangeHandler}
          className={styles.input}
        ></input>
      </div>
      <button
        className={styles.button}
        onClick={() => {
          dispatch(adminDataSlice.actions.reset());
        }}
      >
        Clear
      </button>
    </div>
  );
};
