import sys
from lexer import lexer
from parser import parser


def main():
    if len(sys.argv) > 1:
        s = sys.argv[1]
        result = parser.parse(s, lexer=lexer)
        print(result)
    else:
        while True:
            try:
                s = input('syntech > ')
            except EOFError:
                break
            if not s:
                continue
            result = parser.parse(s, lexer=lexer)
            print(result)


if __name__ == "__main__":
    main()
