import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstName: string) {
  const res= await prisma.user.create({
    data: {
      username,
      password,
      name:firstName,   
      
      
    },
    select:{
        id:true,
        password:true
    }
  });
    console.log(res);
}
insertUser("balaji3","balaji123","balaji");

interface UpdateParams {
  name: string;
  
}

async function updateUser(username: string, {
  name
}: UpdateParams) {
  const res = await prisma.user.update({
    where: {
      username
    },
    data: {
      name
    }
  });
  console.log(res);

}
updateUser("balaji", {
  name: "Kelavath BalajI NAik"
});

async function deleteUser(username: string) {
  const res = await prisma.user.delete({
    where: {
      username
    }
  });
  console.log(res);
}
deleteUser("balaji2");