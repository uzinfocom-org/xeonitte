import { Context, NextFunction } from '../deps.ts';

export default async (ctx: Context, next: NextFunction) => {
    const adminList = await ctx.getChatAdministrators();
    const isAdmin = adminList.find(adminObject => adminObject.user?.id === ctx.from?.id);
    if (!isAdmin) return await ctx.reply(`⚠️ Bu komanda faqat guruh admini uchun!`);
    await next()
}
