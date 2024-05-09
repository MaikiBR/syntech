from lexer import tokens
import ply.yacc as yacc


def p_expression_header1(p):
    'expression : HEADER1'
    p[0] = f'<h1>{p[1][3:-1]}</h1>'


def p_expression_header2(p):
    'expression : HEADER2'
    p[0] = f'<h2>{p[1][3:-1]}</h2>'


def p_expression_header3(p):
    'expression : HEADER3'
    p[0] = f'<h3>{p[1][3:-1]}</h3>'


def p_expression_bold(p):
    'expression : BOLD'
    p[0] = f'<b>{p[1][2:-2]}</b>'


def p_expression_italic(p):
    'expression : ITALIC'
    p[0] = f'<i>{p[1][1:-1]}</i>'


def p_expression_bolditalic(p):
    'expression : BOLDITALIC'
    p[0] = f'<b><i>{p[1][3:-3]}</i></b>'


def p_expression_underline(p):
    'expression : UNDERLINE'
    p[0] = f'<u>{p[1][1:-1]}</u>'


def p_expression_newline(p):
    'expression : NEWLINE'
    p[0] = '<br>'


def p_expression_ulist(p):
    'expression : ULISTSTART expression ULISTEND'
    p[0] = f'<ul>{p[2]}</ul>'


def p_expression_olist(p):
    'expression : OLISTSTART expression OLISTEND'
    p[0] = f'<ol>{p[2]}</ol>'


def p_expression_listitem(p):
    'expression : LISTITEM'
    p[0] = f'<li>{p[1][2:]}</li>'


def p_expression_link(p):
    'expression : LINK'
    url, title = p[1][2:-1].split(']{')
    p[0] = f'<a href="{url}">{title}</a>'


def p_expression_plaintext(p):
    'expression : PLAINTEXT'
    p[0] = p[1][1:-1]


def p_expression_code(p):
    'expression : CODE'
    p[0] = f'<code>{p[1][2:-2]}</code>'


def p_expression_image(p):
    'expression : IMAGE'
    p[0] = f'<img src="{p[1][7:-1]}" />'


def p_expression_anychar(p):
    '''expression : ANYCHAR
                  | expression ANYCHAR'''
    if len(p) == 2:
        p[0] = p[1]
    else:
        p[0] = p[1] + p[2]


def p_error(p):
    print("Syntax error in input!")


parser = yacc.yacc()
