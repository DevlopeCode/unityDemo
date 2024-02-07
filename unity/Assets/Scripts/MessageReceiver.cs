using UnityEngine;

public class MessageReceiver : MonoBehaviour
{
    private int messageCount = 0;

    void Start()
    {
        UnityMessageManager.Instance.OnMessage += OnMessage;
    }

    private void OnMessage(MessageHandler message)
    {
        if (message != null && message.name == "Hello Unity!")
        {
            Debug.Log("Message received from React Native: " + messageCount++);
            SendMessageToReactNative();
        }
    }

    public void SendMessageToReactNative()
    {
        UnityMessageManager.Instance.SendMessageToRN("Hello React Native!");
    }
}
