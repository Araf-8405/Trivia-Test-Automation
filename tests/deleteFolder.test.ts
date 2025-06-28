import test from "@playwright/test";
import { deleteFolderRecursive } from "./fixtures/removeFolder";

test("Delete Folder @Delete", async () => {
  await deleteFolderRecursive;
});

