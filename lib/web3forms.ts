const WEB3FORMS_ACCESS_KEY = "be6d4a15-5d4f-4667-b692-85f9c19867d6";

export async function submitToWeb3Forms(data: Record<string, string>): Promise<boolean> {
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ access_key: WEB3FORMS_ACCESS_KEY, ...data }),
  });
  const result = await res.json();
  return Boolean(result.success);
}
