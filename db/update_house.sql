update houses
set house_name = $2
where id = $1;

select * from houses;