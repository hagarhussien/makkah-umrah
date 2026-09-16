"use client";

import { useSyncExternalStore } from "react";

export type ProgramKey = "eco" | "vip" | "hajj";

let current: ProgramKey = "eco";
const listeners = new Set<() => void>();

export function setProgram(key: ProgramKey) {
  current = key;
  listeners.forEach((l) => l());
}

export function useProgram(): ProgramKey {
  return useSyncExternalStore(
    (cb) => {
      listeners.add(cb);
      return () => listeners.delete(cb);
    },
    () => current,
    () => "eco",
  );
}