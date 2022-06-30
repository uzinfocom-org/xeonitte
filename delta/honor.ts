import { Composer, Context } from "../deps.ts";
import isAdmin from "../hooks/isAdmin.ts";
import isReply from "../hooks/isReply.ts";
import isGroup from "../hooks/isGroup.ts";

const composer = new Composer();

composer.command("honor", isAdmin, isReply, isGroup, async (ctx: Context) => {
  const userFirstName = ctx.message?.reply_to_message?.from?.first_name
    ? ctx.message?.reply_to_message?.from?.first_name
    : "";
  const userlastName = ctx.message?.reply_to_message?.from?.last_name
    ? ctx.message?.reply_to_message?.from?.last_name
    : "";
  const username = ctx.message?.reply_to_message?.from?.username
    ? ctx.message?.reply_to_message?.from?.username
    : "";
  let url: string;

  if (userFirstName || userlastName) {
    url =
      `https://og.xinux.uz/api/honor?full_name=${userFirstName}%20${userlastName}`;
  } else url = `https://og.xinux.uz/api/honor?full_name=${username}`;

  await ctx.reply(url);
});

export default composer;
