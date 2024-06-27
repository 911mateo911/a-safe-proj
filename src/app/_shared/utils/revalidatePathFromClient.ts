'use server';

import { revalidatePath } from "next/cache"

export const revalidatePathFromClient = (path: string) => {
  revalidatePath(path);
};
