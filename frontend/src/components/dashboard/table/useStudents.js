import useSWR, { mutate } from "swr";

const url = "http://localhost:5000/students";

async function updateRequest(id, data) {
  const response = await fetch(`${url}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

async function addRequest(data) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

async function deleteRequest(id) {
  const response = await fetch(`${url}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}

async function getRequest() {
  const response = await fetch(url);
  return response.json();
}

export default function useStudents() {
  const { data, isValidating } = useSWR(url, getRequest);

  const updateRow = async (id, postData) => {
    await updateRequest(id, postData);
    mutate(url);
  };

  const deleteRow = async (id) => {
    await deleteRequest(id);
    mutate(url);
  };

  const addRow = async (postData) => {
    await addRequest(postData);
    mutate(url);
  };

  return {
    data: data || [],
    isValidating,
    addRow,
    updateRow,
    deleteRow,
  };
}
