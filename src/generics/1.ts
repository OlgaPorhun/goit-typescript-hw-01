import axios from "axios";

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

async function testFetch() {
  const data = await fetchData<{ name: string }>("https://github.com/");
  console.log(data.name);
}

testFetch();
