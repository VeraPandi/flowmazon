import FormSubmitButton from "@/components/FormSubmitButton";
import { prisma } from "@/lib/db/prisma";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export const metadata = {
  title: "Ajouter un produit - Flowmazon",
};

async function addProduct(formData: FormData) {
  "use server";

  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/add-product");
  }

  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const imageUrl = formData.get("imageUrl")?.toString();
  const price = Number(formData.get("price") || 0); // We add a default value (0) so that an error is not returned

  if (!name || !description || !imageUrl || !price) {
    throw Error("Missing required fields");
  }

  await prisma.product.create({
    data: { name, description, imageUrl, price },
  });

  redirect("/");
}

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/add-product");
  }

  return (
    <div>
      <h1 className="mb-3 text-lg font-bold">Ajouter un produit</h1>

      <form action={addProduct}>
        <input
          className="input input-bordered mb-3 w-full"
          name="name"
          placeholder="Nom"
          required
          type="text"
        />

        <textarea
          name="description"
          placeholder="Description"
          className="textarea textarea-bordered mb-3 w-full"
          required
        />

        <input
          className="input input-bordered mb-3 w-full"
          name="imageUrl"
          placeholder="URL de l'image"
          required
          type="url"
        />

        <input
          className="input input-bordered mb-3 w-full"
          name="price"
          placeholder="Prix"
          required
          type="number"
        />

        <FormSubmitButton className="btn-block">Enregistrer</FormSubmitButton>
      </form>
    </div>
  );
}
