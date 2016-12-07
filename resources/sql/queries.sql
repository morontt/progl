-- :name get-visible-posts :? :*
-- :doc get visible posts
SELECT `p`.`title`, `p`.`text_post`, `p`.`url`, `p`.`time_created`, `c`.`name` AS `cat_name`, `c`.`url` AS `cat_url`
FROM `posts` AS `p`
INNER JOIN `category` AS `c` ON c.id = p.category_id
WHERE (p.hide = 0) ORDER BY `p`.`time_created` DESC LIMIT 10 OFFSET :offset
