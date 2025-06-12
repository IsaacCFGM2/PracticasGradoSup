/* create table productos (
	id_producto int auto_increment primary key,
    producto varchar(30),
    precio float,
    stock int
);

create table clientes (
	id_cliente int auto_increment primary key,
    nombre varchar(30),
    apellido varchar(30),
    correo varchar(50),
    edad int
);

create table pedidos (
	id_pedido int auto_increment primary key,
    id_cliente int,
    id_producto int,
    producto varchar(30),
    cantidad int,
    total float,
    foreign key (id_cliente) references clientes(id_cliente),
    foreign key (id_producto) references productos(id_producto)
);
insert into productos(producto,precio,stock) values('manzana',10,100),('pera',5,200),('tomate',3,500),('platano',2,50),('aguacate',7,600),('kiwi',19,70),('melon',13,563),('sandia',8,123),('lechuga',33,333),('ajo',2,378);
insert into clientes(nombre,apellido,correo,edad) values('Jose','Adolfo','joseadolfo@gmail.com',19),('Ines','Idalgo','inesidalgo@gmail.com',23),('Daniel','Flores','danielflores@gmail.com',22);
insert into pedidos(id_cliente,id_producto,producto,cantidad) values (1,10,);
drop trigger calcularpreciopedido;
delete from clientes;

delimiter //
create trigger calcularpreciopedido before insert on pedidos for each row
Begin
	declare preciounidad float;
    declare nombreunidad varchar(30);
    select precio into preciounidad from productos where id_producto = new.id_producto;
    select producto into nombreunidad from productos where id_producto =new.id_producto;
    set new.total = preciounidad * new.cantidad;
    set new.producto = nombreunidad;
End //
delimiter ;
*/
insert into pedidos(id_cliente,id_producto,cantidad) values (2,4,20);
select * from productos;
select * from clientes;
select * from pedidos;
