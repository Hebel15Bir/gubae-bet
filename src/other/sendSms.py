from huawei_lte_api.Connection import Connection
from huawei_lte_api.Client import Client
import sys

url = 'http://admin:Heb15Cyr@192.168.8.1/'

def send_messgae(name, number, id):
  message = f"ደቀ መዝሙር {name}፤ በፈለገ አእምሮ ጉባኤ ቤት ተመዝግበዋል። የመታወቂያ ቍጥርዎት {id} ነው። መታወቂያዎትን በጉባኤ ቤቱ ጽሕፈት ቤት ከሦስት ቀን በኋላ መጥተው መውሰድ ይችላሉ።"
  with Connection(url) as connection:
      client = Client(connection)
      try:
          client.sms.send_sms([number], message)
          return True
      except Exception:
          return False

name = sys.argv[1]
id = sys.argv[2]
number = sys.argv[3]
send_messgae(name, number, id)
