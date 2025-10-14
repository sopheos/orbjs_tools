import * as fs from "node:fs/promises";

/**
 * @param {string} pattern 
 * @returns {Promise<void>}
 */
async function del(pattern) {
    const delTasks = [];
    for await (const path of fs.glob(pattern)) {
        delTasks.push(fs.unlink(path));
    }

    return Promise.all(delTasks);
}

export const Files = {
  del,
};
