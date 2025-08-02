"use client"

import * as React from "react"

import type { ToastProps } from "@/components/ui/toast"

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

type ToastsMap = Map<
  string,
  {
    toast: ToastProps
    timeout: ReturnType<typeof setTimeout> | undefined
  }
>

type Action =
  | {
      type: "ADD_TOAST"
      toast: ToastProps
    }
  | {
      type: "UPDATE_TOAST"
      toast: ToastProps
    }
  | {
      type: "DISMISS_TOAST"
      toastId?: ToastProps["id"]
    }
  | {
      type: "REMOVE_TOAST"
      toastId?: ToastProps["id"]
    }

interface State {
  toasts: ToastProps[]
}

const listeners: ((state: State) => void)[] = []

let memoryState: State = { toasts: [] }

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) => (t.id === action.toast.id ? { ...t, ...action.toast } : t)),
      }

    case "DISMISS_TOAST":
      const { toastId } = action
      // ! Side effects !
      if (toastId) {
        toastsMap.get(toastId)?.timeout && clearTimeout(toastsMap.get(toastId)!.timeout)
      }
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t,
        ),
      }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        }
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
  }
}

const toastsMap = new Map<string, { toast: ToastProps; timeout: ReturnType<typeof setTimeout> | undefined }>()

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => listener(memoryState))
}

function createToast(toast: ToastProps) {
  const { id, duration = 5000 } = toast
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id })
  const remove = () => {
    toastsMap.delete(id!)
    dispatch({ type: "REMOVE_TOAST", toastId: id })
  }

  const timeout = setTimeout(() => {
    dismiss()
  }, duration)

  toastsMap.set(id!, { toast, timeout })

  dispatch({ type: "ADD_TOAST", toast: { ...toast, open: true, dismiss, remove } })

  return {
    id: toast.id,
    dismiss,
  }
}

type Toast = ReturnType<typeof createToast>

function useToast() {
  const [state, setState] = React.useState<State>(memoryState)

  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state])

  return {
    ...state,
    toast: React.useCallback((toast: ToastProps) => createToast(toast), []),
  }
}

export { useToast, reducer }
