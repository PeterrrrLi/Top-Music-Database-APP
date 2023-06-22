SELECT f.music_ID, music_title, AVG(rank) as avg_rank 
FROM `fan_music_rank` f
JOIN `music_info` m
ON f.music_ID = m.music_ID
GROUP BY f.music_ID ASC
ORDER BY AVG(rank) LIMIT 10;


SELECT f.artist_ID, artist_name, AVG(rank) as avg_rank 
FROM `fan_artist_rank` f
JOIN `artist` a
ON f.artist_ID = a.artist_ID
GROUP BY artist_ID 
ORDER BY AVG(rank) LIMIT 20;


SELECT music_ID, music_title
FROM `music_info` m
JOIN
(SELECT a.artist_ID, artist_name, AVG(rank) as avg_rank 
FROM `fan_artist_rank` f
JOIN `artist` a 
ON f.artist_ID = a.artist_ID
GROUP BY f.artist_ID 
ORDER BY AVG(rank) LIMIT 5) c
ON m.artist_ID = c.artist_ID;


SELECT s.music_ID, m.music_title, s.ave_rank as Spotify_Rank, ave_rank as Fan_Rank
FROM spotify_rank s 
JOIN fan_music_rank f ON s.music_ID = f.music_ID
JOIN music_info m ON s.music_ID = m.music_ID;


INSERT INTO fan_music_rank (music_ID, rank)
VALUES (2, 100);
SELECT * FROM fan_music_rank;







