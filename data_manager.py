from psycopg2.extras import RealDictCursor
import connection


@connection.connection_handler
def get_questions(cursor: RealDictCursor, lvl: int):
    query = """  SELECT *
                FROM questions
                WHERE level = %(lvl)s
           """
    param = {"lvl": f"{lvl}"}
    cursor.execute(query, param)
    return cursor.fetchall()


@connection.connection_handler
def get_answers_to_question(cursor: RealDictCursor, id_question):
    query = """
            SELECT *
            FROM answers
            WHERE id_question = %(id_question)s
    """
    param = {
        "id_question": id_question
    }
    cursor.execute(query, param)
    return cursor.fetchall()

@connection.connection_handler
def get_ranking(cursor: RealDictCursor):
    query = """
        SELECT *
        FROM ranking
    """
    cursor.execute(query)
    return cursor.fetchall()


@connection.connection_handler
def save_user_points(cursor: RealDictCursor, name, points):
    query_max_id = """
        SELECT MAX(id) FROM ranking
    """
    cursor.execute(query_max_id)
    max_id = cursor.fetchone()
    new_id = max_id['max'] + 1
    query = """
    INSERT INTO ranking (id, name, points)
    VALUES (%(id)s, %(name)s, %(points)s)
    """
    param = {
        "id" : new_id,
        "name" : name,
        "points" : points
    }
    cursor.execute(query, param)

#
# @connection.connection_handler
# def questions(cursor:RealDictCursor, lvl: int):
#     cursor.execute("""
#         SELECT *
#         FROM questions
#     """)
#     return cursor.fetchall()

