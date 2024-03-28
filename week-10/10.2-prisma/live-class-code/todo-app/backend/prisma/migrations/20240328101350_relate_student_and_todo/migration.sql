-- AddForeignKey
ALTER TABLE "Todo" ADD CONSTRAINT "Todo_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
